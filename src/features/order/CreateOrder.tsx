import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { cn } from "../../utils/utils";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
type CartItemType = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};
type OrderType = {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: CartItemType[];
};

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData() as any;

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="bg-stone-50 py-5 ">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new" className="space-y-5  py-2 px-4">
        <div className="mb-3 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">First Name</label>
          <div className="flex flex-grow flex-col gap-1">
          <input className="input" type="text" name="customer" required />
          {formErrors?.customer && (
            <span className="bg-red-100 p-1 rounded-full text-red-500 text-xs">{formErrors.customer}</span>
          )}
          </div>
        </div>

        <div className="mb-3 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="flex flex-grow flex-col gap-1">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <span className="bg-red-100 p-1 rounded-full text-red-700 text-xs">{formErrors.phone}</span>
            )}
          </div>
        </div>

        <div className="mb-3 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="flex flex-grow flex-col gap-1">
            <input className="input" type="text" name="address" required />
            {formErrors?.address && (
              <span className="bg-red-100 p-1 rounded-full text-red-500 text-xs">{formErrors.address}</span>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-300"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Submitting Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: any) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  const order: OrderType = {
    customer: data.customer,
    phone: data.phone,
    address: data.address,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const errors = {} as any;
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "please enter a valid phone number. We might need to call you to confirm your order.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;

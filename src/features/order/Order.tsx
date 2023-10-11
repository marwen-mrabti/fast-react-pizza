// Test ID: IIDSAT

import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";

interface OrderType {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  status: string;
  cart: {
    pizzaId: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
}

function Order() {
  const order = useLoaderData() as OrderType;

  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function Loader({ params }: any) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;

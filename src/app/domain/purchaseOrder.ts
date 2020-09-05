
export interface PurchaseOrder {
  id: string;
  orderId: string;
  productionOrders: string[];
  createdDate: Date;
  dueDate: Date;
  shipDate: Date;
  customerId: string;
}

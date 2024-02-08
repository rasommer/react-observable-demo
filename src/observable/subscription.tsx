type subscription = (value: any) => void;

const subscriptions: subscription[] = [];
export const addSubscription = (subscription: subscription) => {
  subscriptions.push(subscription);
};
export const removeSubscription = (subscription: subscription) => {
  subscriptions.splice(subscriptions.indexOf(subscription), 1);
};
export const notifySubscriptions = (value: any) => {
  subscriptions.forEach((subscription) => subscription(value));
};

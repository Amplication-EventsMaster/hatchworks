import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "payload";

export const NotificationTitle = (record: TNotification): string => {
  return record.payload?.toString() || String(record.id);
};

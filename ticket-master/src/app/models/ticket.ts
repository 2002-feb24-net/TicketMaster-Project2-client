export default interface Ticket {
  id?: number;
  title?: string;
  category?: string;
  datetimeOpened?: Date;
  datetimeModified?: Date;
  datetimeClosed?: Date;
  deadline?: Date;
  priority?: number;
  details?: string;
  userid?: number;
  adminId?: number;
  storeId?: number;
  completed?: string;
}

export default interface Ticket {
  id?: number;
  title: string;
  category?: string;
  datetimeOpened?: Date;
  datetimeModified?: Date;
  datetimeClosed?: Date;
  priority: string;
  details: string;
  userid?: number;
  adminId?: number;
  storeId?: number;
  completed?: string;
  userRequesterName?: string;
  adminAssignedName?: string;
}

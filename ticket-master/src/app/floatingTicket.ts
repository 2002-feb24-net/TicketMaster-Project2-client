export default class floatingTicket {
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

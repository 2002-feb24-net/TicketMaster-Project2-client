export default interface Admin {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  currentTicket: string;
  supportLevel: number;
}

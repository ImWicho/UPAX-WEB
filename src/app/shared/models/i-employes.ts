export interface IEmployesResponse {
  success: boolean;
  data:    Data;
}

interface Data {
  employees: Employee[];
}

export interface Employee {
  id?:        number;
  name:      string;
  last_name: string;
  birthday:  number;
}

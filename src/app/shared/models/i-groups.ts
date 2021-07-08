export interface IGroupsResponse {
  success: boolean;
  data:    Data;
}

interface Data {
  groups: Group[];
}

export interface Group {
  id:   number;
  name: string;
}


export interface IEmployeesByGroupResponse {
  success: boolean;
  data:    Datax;
}

interface Datax {
  employees: EmployeeByGroup[];
}

export interface EmployeeByGroup {
  id:       number;
  name:     string;
  group_id: number;
}

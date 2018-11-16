export class GroupModel {
  constructor(GroupId: number, InputJson: string, UserID: string, OperationFlag, groupName: string, ListOfItem: any) {
    this.GroupId = GroupId;
    this.InputJson = InputJson;
    this.UserLoginId = UserID;
    this.OperationFlag = OperationFlag;
    this.groupName = groupName;
    this.ListOfItem = ListOfItem;
  }
  GroupId: number;
  InputJson: string;
  UserLoginId: string;
  OperationFlag: number;
  ListOfItem: string;
  groupName: string;
}
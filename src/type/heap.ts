/**
 * 行动
 */
export interface IAction {
  index: number; // 序号
  oldPoint: number; // 原始指针
  newPoint: number; // 新指针
}

export interface IForm {
  str: string; // 输入字符串
}
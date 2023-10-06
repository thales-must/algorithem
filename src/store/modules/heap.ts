import { IAction, IForm } from '@/type/heap';
import { Heap } from '@/utils/heap';
import { defineStore } from 'pinia';



/**
 * 堆叠法
 */
const useHeap = defineStore({
  id: 'heap',
  state: () => ({
    _form: <IForm>{}, // 提交字符串
    _origin: <number[]>[], // 原始数据
    _current: <number[]>[], // 当前数据
    _initStep: <any[]>[], // 初始化流程
    _step: <IAction[]>[] // 流程
  }),
  getters: {
    form():IForm {
      return this._form;
    },
    /**
     * 原始数据
     */
    origin():number[] {
      return this._origin;
    },
    current():number[] {
      return this._current;
    },
    /**
     * 初始化流程
     */
    initStep():any[] {
      return this._initStep;
    },
    /**
     * 流程
     */
    step():IAction[] {
      return this._step;
    }
  },
  actions: {
    /**
     * 输入数字数组
     * @param str 输入字符串
     */
    input(str:string) {
      const arr = str.split(',');
      this._origin = [];
      for(const item of arr) {
        this._origin.push(Number(item));
      }
      this._initStep = [];
      const h = new Heap([...this._origin]);
      h.init();
      this._initStep = h.getStep();
    },

    start() {
      const h = new Heap([...this._origin]);
      h.build();
      h.init();
      this._step = h.getStep();
      h.sort();
      this._current = h.getArr();
    },
    /**
     * 初始化
     */
    init() {
      this._form = {
        str: '4,1,2,3,16,9,10,14,8,7'
      }
    }
    
  }
});
export default useHeap;
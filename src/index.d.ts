declare namespace Undo {
  type paramObject = {
    getViewState: any;
    setViewState: any;
    revertingActions: any;
  }
  export function createUndoMiddleware({ getViewState, setViewState, revertingActions }: paramObject): any;

  type INITIAL_UNDO_HISTORY_STATE = {
    undoQueue: any[];
    redoQueue: any[];
  }

  export function undoHistoryReducer(state: INITIAL_UNDO_HISTORY_STATE, action: any): INITIAL_UNDO_HISTORY_STATE;

  export function undo(history: INITIAL_UNDO_HISTORY_STATE): any;
  
  export function redo(history: INITIAL_UNDO_HISTORY_STATE): any;

  export function clear(): any;

  export function addUndoItem(action: string, beforeState: string, afterState: string, meta: any): any;

  interface IActions {
    undo: (history: INITIAL_UNDO_HISTORY_STATE) => any;
    redo: (history: INITIAL_UNDO_HISTORY_STATE) => any;
    addUndoItem: (action: string, beforeState: string, afterState: string, meta: any) => any;
  }
  export const actions: IActions;
}

export = Undo;

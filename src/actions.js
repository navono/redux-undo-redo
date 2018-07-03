export function undo(history = null) {
  return {
    type: 'UNDO_HISTORY@UNDO',
    payload: {
      history
    }
  }
}

export function redo(history = null) {
  return {
    type: 'UNDO_HISTORY@REDO',
    payload: {
      history
    }
  }
}

export function addUndoItem(action, beforeState, afterState, args) {
  return {
    type: 'UNDO_HISTORY@ADD',
    payload: {
      action,
      beforeState,
      afterState,
      args
    }
  }
}

export function clear() {
  return {
    type: 'UNDO_HISTORY@CLEAR'
  }
}

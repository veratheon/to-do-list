import React from "react";

 /**
* Компонент отображает кнопку добавления/изменения задачи
* @param {boolean} loading загружается ли файл
* @param {string} text что написать на кнопке
* @param {function} action какое происходит действие(добавление/изменение)
*/
function ButtonAddTask({loading, name, action}) {
    return (
        <button className='add-task' disabled={loading} onClick={action}>{loading ? "loading file..." : name}</button>
    )
}

export default ButtonAddTask
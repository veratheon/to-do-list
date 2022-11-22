import React from "react";
import { useState } from "react";
/**
* Компонент отображает прикрепленные к 
* задаче файлы со ссылками на них
* @param {number} id  номер задачи
* @param {Array} files  список всех файлов
* @param {Array} filesURL ссылки на файлы
*/
function FilesList({id, files, filesURL}) {
    return(
        <div className="list-item-item files-list">{
            files.length === 0 ? 
           "no files": 
           files.map((file, i) => <a key={i} className="file-a" href={filesURL[i]}>  {file.name}</a>)
       }</div>
    )
}

export default FilesList
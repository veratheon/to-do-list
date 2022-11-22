import React from "react";
import { useState } from "react";

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
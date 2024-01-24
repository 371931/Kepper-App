import React,{useState} from "react";

function CreateNote(props){
    const [note,upNote] = useState({
        title : "",
        content : ""
    });
    const [check,upCheck] = useState(false);

    function onChi(event){
        let {name,value} = event.target;
        upNote((prev)=>{
            return{
                ...prev,
                [name] : value,
            }
        })
    }

    function onCli(event){
        if(note.title == ""){
            errorHandleing("Enter Title","title");
        }else if(note.content == ""){
            errorHandleing("Enter Content","content");
        }else{
        props.onAdd(note); 
        upNote({
            title : "",
            content : ""
        })
        }
        event.preventDefault();     
    }
    
    function enter(event){
        if(event.key == "Enter"){
            if(note.title === ""){
            errorHandleing("Enter Title","title");
            }else if(note.content === ""){
                errorHandleing("Enter Content", "content");
            }else{
                props.onAdd(note); 
                upNote({
                    title : "",
                    content : ""
                })
            }
        }    
    }

    function errorHandleing(message,selector){
        alert(message);
        upNote((prev)=>{ return {
            title : selector === "title" ? "" : prev.title, 
            content : selector === "content" ? "" : prev.content
        }});
        document.querySelector("."+selector).focus();
    }

    function checkChan(){
        upCheck(true)
    }

    return(
        <div>
            <form className="create-note">
                {check && <input className="title" type="text" name="title" placeholder="Title" value={note.title} onChange={onChi} onInput={enter}/>}
                <textarea className="content" name="content" placeholder="Take a note..." rows={ check ? "3" : "1"} value={note.content} onChange={onChi} onClick={checkChan} ></textarea>
                {check && <button onClick={onCli}>
                    Add
                </button>}
            </form>
        </div>
    );
}

export default CreateNote;
import React from 'react'
import styled from 'styled-components';
function NoteContent({ activeNote, onUpdateNote }) {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModifiedDate: Date.now()
        })

    }

    if (!activeNote) return <NoteContentWrapper className="no-active-note">No Notes Selected</NoteContentWrapper>;
    return (
        <NoteContentWrapper>
            <NoteSection>
                <div className="note-heading">
                    <input type="text" name="" id="title" className='input-item' autoFocus placeholder='Untitled Text'
                        value={activeNote.title}
                        onChange={(e) => onEditField("title", e.target.value)}
                    />
                </div>
                <div className="note-description">
                    <textarea name="" id="body" rows="15" cols="5" className='input-item' placeholder='Write your note here ..!'
                        value={activeNote.body}
                        onChange={(e) => onEditField("body", e.target.value)}
                    ></textarea>
                </div>

            </NoteSection>
            <PreviewSection>
                <div className="note-preview">
                    <h1>{activeNote.title}</h1>
                    <p>{activeNote.body}</p>
                </div>
            </PreviewSection>
        </NoteContentWrapper>
    )
}
const NoteContentWrapper = styled.div`
position:absolute;
left:300px;
padding:3rem 0rem;
 font-family: 'Poppins', sans-serif;
width: 80%;
height: 100vh;
margin:0 auto;
`;
const NoteSection = styled.div`
padding:0rem 3rem;
.note-heading{
   margin-bottom:4rem;
    .input-item{
        width:100%;
        padding:1rem;
        font-size:19px;
        border:0.5px solid #d7d4d4;
    } 
}

.note-description{
      margin-bottom:1rem;
     
    .input-item{
        width:100% !important;
         border:0.5px solid #d7d4d4;
         padding:0.5rem;
    }
 
}
`;
const PreviewSection = styled.div`
   border-top: 1px solid #ddd;
    background-color:#F5F5F5;
    height:100%;
   
.note-preview{
    padding:1rem 3rem;
    p {
        margin-top:10px;
    }
}
`;
export default NoteContent
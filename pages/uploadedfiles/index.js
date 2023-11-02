import { getAllFiles } from "../../files";
function UploadedFiles() {
    const files = getAllFiles();
    return (
        <div>
        <h1 style={{color : 'maroon', fontSize: '100px'}}>Company Files</h1>
            <ul>
                {files.filter(file => file.type === 'uploaded').map(file => 
                    <li key={file.id}>
                        <a style={{color : 'black', fontSize: '100px'}} target="_blank" href={file.url} rel="noopener noreferrer">{file.name} {file.type}</a>
                    </li>   
                )}
            </ul>
        </div>
    )
}

export default UploadedFiles;
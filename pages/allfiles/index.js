import Link from "next/link";
import { FILES } from "../../files";
function AllFiles () {
    return (
        <div>
            <h1 style={{color : 'maroon', fontSize: '30px'}}>All Files</h1>
            <ul>
                {FILES.map(file => 
                    <li key={file.id}>
                        <a style={{color : 'black', fontSize: '30px'}} target="_blank" href={file.url} rel="noopener noreferrer">{file.name}</a>
                    </li>   
                )}
                
            </ul>

        </div>
    )
} 
export default AllFiles;
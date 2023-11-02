import Link from "next/link";
import Image from "next/image";
import FolderIcon from '@/public/folder-icon.png'
function LinkButtons( props) {
    return (
        <div style={{ display: 'flex'}}>  
            <Link replace href={props.link}>
                <button  style={{ width: '200px',
                    height: '200px',
                    background: '#9CA5BE',  
                    border: 'none',
                    margin: '0px 50px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    padding: '20px'
                    }}> 
                    <Image src={FolderIcon} height={120} width={120}></Image>
                    <p style={{ fontSize: '20px'}}>{props.name}</p>
                </button>
            </Link>
        </div>
    )
}

export default LinkButtons;
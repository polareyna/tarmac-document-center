import { getUser } from "@/users";
import styles from '@/styles/Profile.module.css'
import defaultUserImage from '@/public/default-user.svg'
import location from '@/public/location.svg'
import Image from "next/image";
import Divider from "../ui/Divider";

function Profile() {
    const user = getUser()
    return (
        <div className={styles.profileBody}>
            <div className={styles.profilePicture}>
                <Image src={defaultUserImage} alt="User Image" height={120} width={120}/>
            </div>
            <b>{user.name}</b>
            <p>{user.jobPosition}</p> 
            <Divider/>
            <b>Hire Date</b>
            <p>{user.hireDate}</p>
            <Divider/>
            <div className={styles.location}>
                <Image src={location} alt="Location" height={15} width={15}></Image>
                <p style={{ marginLeft:'5px'}}>{user.location}</p>
            </div>
        </div>
    )
}

export default Profile;
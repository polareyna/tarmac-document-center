import styles from '@/styles/Browser.module.css'
import LinkButtons from '../ui/LinkButtons';

function Browser() {
    return (
        <div className={styles.browserBody}>
            <LinkButtons link={'/allfiles'} name={'All Files'}/>
            <LinkButtons link={'/uploadedfiles'} name={'Uploaded Files'}/>
            <LinkButtons link={'/companyfiles'} name={'Company Files'}/>
        </div>
    )
}

export default Browser;
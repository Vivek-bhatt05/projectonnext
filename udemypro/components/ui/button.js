const  Link  = require("next/link");

import styles from 'styles/button.module.css'

function Button(prop){

    console.log(props)
    return(
     <Link href={props.link}> 
      <a className={styles.btn} >{props.children}</a>
    </Link>
    )
}

export default Button
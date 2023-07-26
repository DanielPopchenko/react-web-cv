import React from "react";
import styles from "./Letters.module.css";

function Letters() {
	return (
		<div className={styles.container}>
			<p className={styles.firstLine}>Hello and welcome,</p>
			<p className={styles.secondLine}>everybody!</p>
		</div>
	);
}

export default Letters;

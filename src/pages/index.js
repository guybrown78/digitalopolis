import React from "react"
//import {Link} from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => ( 
	<Layout>
		< SEO 	
			title = "Home"
			keywords = {
				[`gatsby`, `application`, `react`]
			}
		/> 
		<h1>digitalopolis</h1>
		<h2>We build the future</h2>
		<p>A forward thinking software house creating web solutions.</p> 
		<p>We are valiant visionary developers carving dazzling applications for the digital world.</p>
	</Layout>
);

export default IndexPage
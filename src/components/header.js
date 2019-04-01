import { Link, Image } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../components/logo"

const bgColors = { "Default": "#81b71a" };

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `rgba(11,52,75,1)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
			<div
				style={{
					display:`flex`,
					flexDirection:`row`,
					justifyContent:`flex-start`,
					alignItems:`baseline`
				}}
			>
				
				<div style={{ width:`5rem`, marginRight:`1rem` }} >
					<Logo />
				</div>

				<h1 style={{ margin: 0}}>
					<Link
						to="/"
						style={{
							color: `white`,
							textDecoration: `none`,
							paddingBottom:`15px`
						}}
					>
						{siteTitle}
					</Link>
				</h1>

				
			</div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

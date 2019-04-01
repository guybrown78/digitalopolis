import React from "react"

export default () => (
  <div style={{ 
		display:'flex',
		backgroundColor: '#105078',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		width:'100%,',
		height:'100%',
		padding:`2rem`,
		color:'#fefefe'
	}}>

		<div 
			className="wrapper w1"
			style={{
				perspective:`250px`,
			}}
		>
			<div 
				className="cube"
				style={{
					display:'flex',
					flexDirection:'row',
					justifyContent:'center',
					alignItems:'center',
					transformStyle:'preserve-3d',
					transform:`rotateX(-40deg) rotateY(32deg)`,
				}}
			>
				<div 
					className="side left"
					style={{ 
						display:'flex',
						border:`solid 0.15rem #fefefe`,
						backgroundColor: '#fefefe',
						width:`2rem`,
						height:`6rem`,	
						transform:`rotateY(90deg) translateZ(1em)`,
					}} />
				<div 
					className="side right"
					style={{ 
						display:'flex',
						border:`solid 0.15rem #fefefe`,
						width:`2rem`,
						height:`6rem`,
						transform:`rotateY(-180deg) translateZ(1em)`,
					}}
				/>
			</div>
		</div>

	</div>


)
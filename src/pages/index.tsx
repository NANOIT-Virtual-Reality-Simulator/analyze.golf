import * as React from "react"
import { Pane, Text, Heading } from "evergreen-ui"
import Layout from "../app-components/layout"
import { css } from "@emotion/core"
import Screenshot from "../page-components/index/screenshot"
import Logo from "../images/app/logo.inline.svg"
import SelectFile from "../page-components/index/select_file"
import background from "../images/app/darklayout.svg"
console.log(background)
export default () => (
	<Layout>
		<Pane
			is="section"
			display="flex"
			alignItems="stretch"
			justifyContent="center"
			width="100vw"
			minHeight="300px"
			position="relative"
			height="calc(100vh - 3.5em)"
			css={css`
				:before {
					content: "";
					background-image: url(${background});
					background-size: cover;
					background-position: center center;
					opacity: 0.03;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
				}
			`}>
			<Pane display="flex" alignItems="center" width="100%" padding="2em" maxWidth="64em">
				<Pane
					flex="1"
					css={css`
						text-align: left;
						@media screen and (max-width: 699px), screen and (max-height: 599px) {
							text-align: center;
						}
					`}>
					<Pane is={Logo} height="1.5em" width="auto" />
					<Heading marginTop=".25em" is="h1" size={900}>
						Free Golf Swing Analyzer
					</Heading>
					<Text display="block" marginTop=".5em" size={600}>
						No ads. No video upload. No app download.
					</Text>
					<SelectFile />
				</Pane>
				<Pane
					css={css`
						@media screen and (max-width: 699px), screen and (max-height: 599px) {
							display: none;
						}
					`}
					flex="1">
					<Pane is={Screenshot} />
				</Pane>
			</Pane>
		</Pane>
	</Layout>
)

import React, { useState } from 'react'
import styled from 'styled-components'

const Header = styled('div')`
	svg {
		height: 30px;
		width: 30px;
		rotate: 270deg;
	}
	span {
		font-weight: bold;
		margin-top: 3px;
	}
	gap: 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`

const SearchBar = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid lightgrey;
	border-radius: 30px;
	padding: 10px;
	box-shadow: 2px 2px 5px lightgrey;
	width: 80%;
	margin-top: 25px;
`

const LinkAndSpan = styled('div')`
	display: flex;
`

const Separator = styled('div')`
	height: 20px;
	width: 1px;
	margin-left: 5px;
	margin-right: 5px;
	background: lightgrey;
`

const TopHeader = styled('div')`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
`

const IconContainer = styled('div')`
	margin-left: 10px;
	background: #ff385c;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	rotate: 180deg;
	padding: 5px;
	height: 30px;
	width: 30px;
	svg {
		height: 17px;
		width: 17px;
	}
`

const UserAndHamburger = styled('div')`
	border: 1px solid lightgrey;
	border-radius: 40px;
	svg {
		rotate: 0deg;
	}
	display: flex;
	justify-content: center;
	width: 75px;
	padding: 8px;
	position: relative;
`

const RightStuff = styled('div')`
	display: flex;
	align-items: center;
	.globe {
		rotate: 180deg;
		margin-right: 25px;
	}
`

const YourHomeText = styled('div')`
	margin-right: 30px;
`

const CenterSwitch = styled('div')`
	margin-left: 225px;
	display: flex;
`

const SepAndText = styled('div')`
	margin-right: 30px;
	display: flex;
`

const LeftSwitch = styled('div')`
	font-weight: ${(props) => props.sel ? '700' : '400'};
	margin-right: 10px;
	cursor: pointer;
	:hover {
		background: black;
		opacity: 0.5;
	}
`

const RightSwitch = styled('div')`
	font-weight: ${(props) => props.sel ? '700' : '400'};
	cursor: pointer;
`

const Dropdown = styled('div')`
	position: absolute;
	background: white;
	right: 20px;
	width: 200px;
	height: 200px;
	bottom: -240px;
	z-index: 1000;
	box-shadow: 2px 2px 5px lightgrey;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 20px

`

const HomePage = () => {
	const [leftSwitchSel, setLeftSwitchSel] = useState(true)
	const [userDropdown, setUserDropdown] = useState(false)
	return <Header>
		<TopHeader>
			<LinkAndSpan>
				<a href='' className='logo'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff385c" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
					</svg>
				</a>
			</LinkAndSpan>
			<CenterSwitch>
				<LeftSwitch onClick={() => setLeftSwitchSel(true)} sel={leftSwitchSel}>
					Stays
				</LeftSwitch>
				<RightSwitch onClick={() => setLeftSwitchSel(false)} sel={!leftSwitchSel}>
					Experiences
				</RightSwitch>
			</CenterSwitch>
			<RightStuff>
				<YourHomeText>Airbnb your home</YourHomeText>
				<svg className='globe' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
				</svg>
				<UserAndHamburger onClick={() => setUserDropdown(true)}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
					</svg>
					{userDropdown
						? <Dropdown>
							<div>
						Thing 1
							</div>
							<div>
						Thing 1
							</div>
							<div>
						Thing 1
							</div>
						</Dropdown>
						: null}
				</UserAndHamburger>
			</RightStuff>
		</TopHeader>
		<SearchBar>
			<SepAndText>
				<Separator />
				<div>Check in</div>
			</SepAndText>
			<SepAndText>
				<Separator />
				<div>Check in</div>
			</SepAndText>
			<SepAndText>
				<Separator />
				<div>Check in</div>
			</SepAndText>
			<IconContainer>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="white" className="mag-glass">
					<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
				</svg>
			</IconContainer>
		</SearchBar>
	</Header>
}

export default HomePage

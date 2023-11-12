import quadsatLogo from '../images/Web icon export/Logo/Quadsat_element_yellow_400px.png'
import dashboardIcon from '../images/Web icon export/Icons/Group 292.png'
import dashboardIconHover from '../images/Web icon export/Icons/Group 288.png'
import anntenasIcon from '../images/Web icon export/Icons/Group 296.png'
import anntenasIconHover from '../images/Web icon export/Icons/Group 290.png'
import missionsIconHover from '../images/Web icon export/Icons/Group 288.png'
import reportsIcon from '../images/Web icon export/Icons/Group 293.png'
import reportsIconHover from '../images/Web icon export/Icons/Group 287.png'
import analyticsIcon from '../images/Web icon export/Icons/Group 294.png'
import analyticsIconHover from '../images/Web icon export/Icons/Group 289.png'
import assetsIcon from '../images/Web icon export/Icons/Group 295.png'
import assetsIconHover from '../images/Web icon export/Icons/Group 291.png'
import siteInvestigationIcon from '../images/Web icon export/Icons/Group 286.png'
import siteInvestigationIconHover from '../images/Web icon export/Icons/Group 285.png'

const SidePanel = () => {

	return (
		<div
			class="sidebar fixed top-0 bottom-0 lg:left-0 w-[6.25em] overflow-y-auto text-center bg-quadsat-blue"
		>
			<div class=" p-2">
				<img src={quadsatLogo} className="side-bar-logo" alt="logo" />

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={dashboardIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Dashboard</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={dashboardIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Dashboard</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={anntenasIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Antennas</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={anntenasIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Antennas</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="bg-quadsat-yellow group-hover:hidden">
						<img src={missionsIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Missions</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={missionsIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Missions</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={reportsIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Reports</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={reportsIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Reports</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={analyticsIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Analytics</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={analyticsIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Analytics</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={assetsIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Assets</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={assetsIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Assets</h1>
					</div>
				</div>

				<div class="group side-bar-group">
					<div class="group-hover:hidden">
						<img src={siteInvestigationIcon} className="side-bar-icons" alt="logo" />
						<h1 class="text-gray-200 text-[12px]">Site Investigation</h1>
					</div>
					<div class="hidden group-hover:block bg-quadsat-yellow">
						<img src={siteInvestigationIconHover} className="side-bar-icons" alt="logo" />
						<h1 class="text-quadsat-blue text-[12px]">Site Investigation</h1>
					</div>
				</div>

			</div>
		</div>
	)

}

export default SidePanel;
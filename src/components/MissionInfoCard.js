import missionsIcon from '../images/Web icon export/Icons/Group 288.png'
import reportsIcon from '../images/Web icon export/Icons/Group 287.png'
import mission from '../datasets/mission_and_scans.json'

const MissionInfoCard = () => {
    return (

        <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <div class="grid grid-cols-1 divide-y">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center">Mission <br /> {mission.title}</div>
                    <table class="table-auto w-full border text-xs">
                        <tbody>
                            <tr>
                                <td>Agent</td> <td>{mission.agent}</td>
                            </tr>
                            <tr>
                                <td>Antenna</td> <td>{mission.antenna.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Antenna Diameter</td> <td>{mission.antenna.effectiveDiameter}</td>
                            </tr>
                            <tr>
                                <td>Frequency</td> <td>{mission.antennaConfiguration.frequency} MHz</td>
                            </tr>
                            <tr>
                                <td>Altitude</td> <td>{mission.antennaConfiguration.altitude} meters</td>
                            </tr>
                            <tr>
                                <td>Azimuth</td> <td>{mission.antennaConfiguration.azimuth}</td>
                            </tr>
                            <tr>
                                <td>Elevation</td> <td>{mission.antennaConfiguration.elevation}</td>
                            </tr>
                            <tr>
                                <td>File Size</td> <td>2.54GB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Scope</div>
                    <p class="text-gray-700 text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <div class="px-6 py-4 columns-2 text-center">
                    <img src={missionsIcon} className="icons inline" alt="logo" />
                    <h1 class="text-quadsat-blue text-[12px]">Missions</h1>

                    <img src={reportsIcon} className="icons inline" alt="logo" />
                    <h1 class="text-quadsat-blue text-[12px]">Reports</h1>
                </div>
            </div>
        </div>
    )
}

export default MissionInfoCard;
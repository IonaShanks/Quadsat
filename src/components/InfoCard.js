import missionsIcon from '../images/Web icon export/Icons/Group 288.png'
import reportsIcon from '../images/Web icon export/Icons/Group 287.png'

const InfoCard = () => {
    return (

        <div class="max-w-xs rounded overflow-hidden shadow-lg">
            <div class="grid grid-cols-1 divide-y">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2 text-center">Mission <br /> Mallorca, Spain</div>
                    <table class="table-auto w-full border text-xs">
                        <tbody>
                            <tr>
                                <td>Agent</td> <td>Poe</td>
                            </tr>
                            <tr>
                                <td>Antenna</td> <td>Kingsat</td>
                            </tr>
                            <tr>
                                <td>Antenna Diameter</td> <td>0.85</td>
                            </tr>
                            <tr>
                                <td>Frequency</td> <td>12600 MHz</td>
                            </tr>
                            <tr>
                                <td>Altitude</td> <td>15.93 meters</td>
                            </tr>
                            <tr>
                                <td>Azimuth</td> <td>176.75</td>
                            </tr>
                            <tr>
                                <td>Elevation</td> <td>26.76</td>
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

export default InfoCard;
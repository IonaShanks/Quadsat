import missionsIcon from '../images/Web icon export/Icons/Group 288.png'
import reportsIcon from '../images/Web icon export/Icons/Group 287.png'
import mission from '../datasets/mission_and_scans.json'

const MissionTable = () => {
    return (
        <div class="py-1 px-2 ">

            <table class="  text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <td class="pr-6">Name</td>
                        <td class="pr-6">Frequency</td>
                        <td class="pr-6">Range</td>
                        <td class="pr-6">Polarization</td>
                    </tr>
                </thead>
                <tbody >
                    <tr class="border hover:bg-quadsat-blue hover:text-quadsat-yellow">
                        <td class="pr-12">Single point tracking_1</td>
                        <td class="pr-20">12.6 GHz</td>
                        <td class="pr-20">+30deg</td>
                        <td class="pr-20">Co</td>
                    </tr>
                    <tr class="border hover:bg-quadsat-blue hover:text-quadsat-yellow">
                        <td>Single point tracking_1</td>
                        <td>12.6 GHz</td>
                        <td>+30deg</td>
                        <td>Co</td>
                    </tr>
                    <tr class="border hover:bg-quadsat-blue hover:text-quadsat-yellow">
                        <td>Single point tracking_1</td>
                        <td>12.6 GHz</td>
                        <td>+30deg</td>
                        <td>Co</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default MissionTable;
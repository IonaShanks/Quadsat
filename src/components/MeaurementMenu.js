const MeasurementMenu = () => {
    return (

        <div class="max-w-xs overflow-hidden">
            <div class="px-6 py-4">
                <ul class="menu bg-base-200 w-64 text-xs">
                    <li>
                        <details open>
                            <summary class="pb-2">Measurement types</summary>
                            <ul>
                                <li class="pb-2"><a>Alignments</a></li>
                                <li class="pb-2"><a>Radiation pattern cuts</a></li>
                                <li class="pb-2"><a>Frequency sweeps</a></li>
                                <li class="pb-2"><a>Gains</a></li>
                                <li class="pb-2"><a>G/T</a></li>
                                <li class="pb-2"><a>EIRP</a></li>
                                <li><a>Polarization</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MeasurementMenu;
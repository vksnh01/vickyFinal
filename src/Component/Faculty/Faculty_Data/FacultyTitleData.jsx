import Format from '../Card_Format/Format'
import AgData from '../Department/Agriculture/AgData'
import ArtData from '../Department/Art/ArtData'
import btcData from '../Department/BTC/BTCData'
import BpedData from '../Department/BPED/BPEDData'
import BedData from '../Department/BED/BedData'
import CommerceData from '../Department/Commerce/CommerceData'
import HSData from '../Department/Home_Science/HSData'
import ManagementData from '../Department/Management/ManagementData'
import PEData from '../Department/Physical_Education/PEData'
import ScienceData from '../Department/Science/ScienceData'
import CSData from '../Department/Computer_Science/CSData'

const FacultyData = [
  { id: "headingOne",   aria: "collapseOne",title: "Agriculture",  expanded: "true", cls: "accordion-button" },
  { id: "headingTwo",   aria: "collapseTwo",title: "Art",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingThree", aria: "collapseThree",title: "BTC",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingaFour", aria: "collapseFour",title: "B.Ped",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingFive",  aria: "collapseFive",title: "B.Ed",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingSix",   aria: "collapseSix",title: "Commerce",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingSeven", aria: "collapseSeven", title: "Home Science",expanded: "false", cls: "accordion-button collapsed" }, 
  { id: "headingEight",aria: "collapseEight",title: "Management",expanded: "false",cls: "accordion-button collapsed" },
  { id: "headingNine",  aria: "collapseNine",title: "Physical Education",expanded: "false", cls: "accordion-button collapsed" },
  { id: "headingTen",   aria: "collapseTen",title: "Scinece",expanded: "false", cls: "accordion-button collapsed" }, 
  { id: "headingEleven",  aria: "collapseEleven",title: "Computer Science",expanded: "false", cls: "accordion-button collapsed" },

]
const FacultyContent = [
  { id: "headingOne", aria: "collapseOne", classes: "collapse show", name: <Format Data={AgData} /> },
  { id: "headingTwo", aria: "collapseTwo", classes: "collapse", name: <Format Data={ArtData} /> },
  { id: "headingThree", aria: "collapseThree", classes: "collapse", name: <Format Data={btcData} /> },
  { id: "headingFour", aria: "collapseFour", classes: "collapse", name: <Format Data={BpedData} /> },
  { id: "headingFive", aria: "collapseFive", classes: "collapse", name: <Format Data={BedData} /> },
  { id: "headingSix", aria: "collapseSix", classes: "collapse", name: <Format Data={CommerceData} /> },
  { id: "headingSeven", aria: "collapseSeven", classes: "collapse", name: <Format Data={HSData} /> },
  { id: "headingEight", aria: "collapseEight", classes: "collapse", name: <Format Data={ManagementData} /> },
  { id: "headingNine", aria: "collapseNine", classes: "collapse", name: <Format Data={PEData} /> },
  { id: "headingTen", aria: "collapseTen", classes: "collapse", name: <Format Data={ScienceData} /> },
  { id: "headingEleven", aria: "collapseEleven", classes: "collapse", name: <Format Data={CSData} /> },
]

export { FacultyData, FacultyContent };
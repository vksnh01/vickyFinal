
import M from './Managing/Manage'
import P from './Practical/Practical'
import C from './College/College'
import O from './Office/Office'
const titledata =[
{title:"Managing Committee", id:"headingOne",aria:"collapseOne",expanded:"true",cls:"accordion-button"},
{title:"Practical Committee", id:"headingTwo",aria:"collapseTwo",expanded:"false",cls:"accordion-button collapsed"},
{title:"College Committee", id:"headingThree",aria:"collapseThree",expanded:"false",cls:"accordion-button collapsed"},
{title:"Office Committee", id:"headingFour",aria:"collapseFour",expanded:"false",cls:"accordion-button collapsed"}
]

const ContentData =[
    {id:"headingOne",aria:"collapseOne",classes:"collapse show",content: <M />},
    {id:"headingTwo",aria:"collapseTwo",classes:"collapse",content:<P />},
    {id:"headingThree",aria:"collapseThree",classes:"collapse",content:<C />},
    {id:"headingFour",aria:"collapseFour",classes:"collapse",content:<O />},

]
export  {titledata,ContentData};
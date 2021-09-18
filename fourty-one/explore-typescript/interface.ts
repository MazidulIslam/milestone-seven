// in interface the interface property in any variable declaration those property are MutationObserver. but if option then ? is used that property in interface . interface can be extends in other interface.
// in interface there is no need to use = to declare 
type People = {
    name: string,
    height: number,
    age: number,
    origin: string
}
interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
}
const messy: Player = {
    name: 'L messy',
    club: 'abahani',
    salary: 12211,
    wife: 'bou'
}
const ronal: Player = {
    name: 'L messy',
    club: 'abahani',
    salary: 12211,
    // wife: 'bou'
}
interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number
}
interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingspeed: number
}
const zukerburg: Developer = {
    language: 'js',
    codeEditor: 'vs code',
    typingspeed: 43,
    name: 'zukerburg',
    designation: 'fb',
    salary: 32222,
    age: 43
}

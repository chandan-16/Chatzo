import moment from "moment";

export default function ConverTime(data_input: string) {
    return moment(data_input).format("llll");
}
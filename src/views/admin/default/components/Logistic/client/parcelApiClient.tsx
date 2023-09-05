import axios from "axios";

async function fetchTotalParcelSla(): Promise<{
  parcel_in_sla: number;
  parcel_out_sla: number;
}> {
  try {
    const response = await axios.get(
      "https://ud6mt7fsrc.execute-api.eu-central-1.amazonaws.com/dev/mock/v1/logistic/parcels/SLA"
    );

    if (response.status === 200) {
      const { parcel_in_sla, parcel_out_sla } = response.data;
      return { parcel_in_sla, parcel_out_sla };
    } else {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}

export default fetchTotalParcelSla;

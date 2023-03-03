import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"

export function handleSummary(data) {
  return {
    "C:/Users/ADRIAN/Desktop/K6/report/carga.html": htmlReport(data),
  }
};


export const options = {
  vus: 15000,
  duration: '40s',
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}


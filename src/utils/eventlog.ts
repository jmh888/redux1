export const addEventLog = (appData: any, source: string, type: string, action: string, params: any) => {
  (window as any).dataLayer ||= [];
  (window as any).dataLayer.push({
    source,
    type,
    action,
    value: params.value,
    visitorId: appData.visitorId,
  });
}

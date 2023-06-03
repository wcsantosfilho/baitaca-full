import * as amplitude from '@amplitude/analytics-browser';

export const initAmplitude = () => {
  amplitude.init(process.env.REACT_APP_AMPLITUDE, null, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
};

export const setAmplitudeUserDevice = installationToken => {
  amplitude.setDeviceId(installationToken);
};

export const setAmplitudeUserId = userId => {
  amplitude.setUserId(userId);
};

export const sendAmplitudeData = (eventType, eventProperties) => {
  amplitude.logEvent(eventType, eventProperties);
};

export const sendAmplitudeTrack = (eventType, eventProperties) => {
  amplitude.track(eventType, eventProperties);
}
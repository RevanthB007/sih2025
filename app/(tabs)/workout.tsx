import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Platform, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// IMPORTANT: Replace this with your computer's IP address
const SERVER_URL = 'http://192.168.0.101:5000/analyze';

export default function WorkoutScreen() {
  const [loading, setLoading] = useState(false);
  const [reps, setReps] = useState(null);
  const [statusMessage, setStatusMessage] = useState('Select a video to begin analysis.');

  const pickAndAnalyzeVideo = async () => {
    try {
      setLoading(true);
      setReps(null);
      setStatusMessage('Picking video...');

      // Pick a video from the device's photo and video gallery
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: false,
        quality: 1,
      });

      if (result.canceled) {
        setLoading(false);
        setStatusMessage('Video selection cancelled.');
        return;
      }

      const videoUri = result.assets[0].uri;
      setStatusMessage('Uploading video for analysis...');

      // Prepare the file for upload
      const formData = new FormData();
      formData.append('file', {
        uri: videoUri,
        name: `workout_video.${videoUri.split('.').pop()}`,
        type: 'video/mp4',
      } as any);

      // Send the file to the backend server
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setReps(data.reps);
      setStatusMessage(`Analysis complete!`);

    } catch (error: any) {
      console.error('Analysis failed:', error);
      setStatusMessage(`Analysis failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Analyzer</Text>

      <View style={styles.analysisContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#ffc600" />
        ) : (
          <Button
            title="Select and Analyze Video"
            onPress={pickAndAnalyzeVideo}
            color="#ffc600"
          />
        )}
        <Text style={styles.status}>{statusMessage}</Text>
      </View>

      {reps !== null && (
        <View style={styles.resultsContainer}>
          <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Reps</Text>
            <Text style={styles.resultValue}>{reps}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffc600',
    marginBottom: 20,
    textAlign: 'center',
    ...Platform.select({
      ios: { fontFamily: 'AvenirNext-Bold' },
      android: { fontFamily: 'sans-serif-condensed' },
    }),
  },
  analysisContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  status: {
    fontSize: 16,
    color: '#b3b3b3',
    marginTop: 20,
    textAlign: 'center',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  resultBox: {
    backgroundColor: 'rgba(59, 58, 81, 0.7)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultLabel: {
    fontSize: 18,
    color: '#e0e0e0',
    marginBottom: 5,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffc600',
  },
});

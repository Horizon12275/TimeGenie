import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Divider from './divider';
import MyButton from '../utils/my_button';

const EventCard = ({
  isEditing,
  setIsEditing,
  startTime,
  endTime,
  title,
  location,
  color,
  additionalInfo,
}: {
  isEditing: boolean;
  setIsEditing: (isEditing: number) => void;
  startTime: string;
  endTime: string;
  title: string;
  location: string;
  iconUri: string;
  color: string;
  additionalInfo?: {
    text: string;
    count?: number;
  };
}) => {
  const handleExpand = () => {
    if (isEditing) {
      setIsEditing(null);
    } else {
      setIsEditing(1);
    }
  };

  return (
    <View style={styles.scheduleItemContainer}>
      <View style={styles.timeContainer}>
        <MyButton
          icon={
            isEditing
              ? require('../assets/icons/down-arrow.png')
              : require('../assets/icons/right-arrow.png')
          }
          onPress={handleExpand}
          style={styles.icon}
        />
        <View style={styles.iconWrapper}>
          <View style={styles.startTimeWrapper}>
            <Text>{startTime}</Text>
          </View>
          <View style={styles.endTimeWrapper}>
            <Text>{endTime}</Text>
          </View>
        </View>
      </View>
      <Divider direction="vertical" color={color} marginHorizontal={15} />
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, {color}]}>{title}</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <View style={styles.locationWrapper}>
            <Text>{location}</Text>
          </View>
          {additionalInfo && (
            <View style={styles.additionalInfoWrapper}>
              <Divider color="black" thickness={0.5} marginHorizontal={6} />
              {additionalInfo.count && (
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{additionalInfo.count}</Text>
                </View>
              )}
              <View style={styles.additionalInfoTextWrapper}>
                <Text>{additionalInfo.text}</Text>
              </View>
            </View>
          )}
        </View>
        {isEditing && (
          <View style={styles.checklistWrapper}>
            <View style={styles.checklistHeader}>
              <Text style={styles.checklist}>Checklists</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 8,
                marginTop: 10,
              }}>
              <View style={styles.taskItemContainer}>
                <MyButton
                  icon={
                    1
                      ? require('../assets/icons/checked.png')
                      : require('../assets/icons/checkbox.png')
                  }
                  style={styles.taskIcon}
                />
                <Text
                  style={[styles.taskTitle, 1 && styles.completedText]}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {title}
                </Text>
                <MyButton
                  icon={require('../assets/icons/delete.png')}
                  onPress={() => {}}
                  style={styles.deleteIcon}
                />
              </View>
              <Text style={[styles.dueDate, 1 && styles.completedText]}>
                Due: 9/19
              </Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={[styles.button, styles.secondaryButton]}>
                  <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.primaryButton]}>
                  <Text style={[styles.buttonText, styles.primaryButtonText]}>
                    + Checklist
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleItemContainer: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(235, 235, 245, 0.60)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 24,
    marginHorizontal: 16,
    minHeight: 80,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#010618',
    height: '100%',
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    height: 18,
    aspectRatio: 1,
  },
  startTimeWrapper: {
    fontFamily: 'Inter, sans-serif',
  },
  endTimeWrapper: {
    fontFamily: 'Inter, sans-serif',
  },
  contentContainer: {
    flex: 1,
  },
  titleWrapper: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
  },
  detailsWrapper: {
    display: 'flex',
    marginTop: 4,
    flexDirection: 'row',
    fontSize: 12,
    fontWeight: '400',
  },
  locationWrapper: {
    color: '#21283F',
    fontFamily: 'Inter, sans-serif',
  },
  additionalInfoWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  countBadge: {
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#3083FD',
    borderRadius: 8,
    alignItems: 'center',
    width: 16,
    justifyContent: 'center',
    height: 16,
    marginRight: 4,
  },
  countText: {
    color: '#FFF',
    fontSize: 10,
  },
  additionalInfoTextWrapper: {
    color: '#010618',
    fontFamily: 'Inter, sans-serif',
  },
  checklist: {
    color: 'black',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '700',
  },
  checklistWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 12,
  },
  checklistHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  taskItemContainer: {
    alignItems: 'center',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },

  taskIcon: {
    width: 24,
    height: 24,
  },
  deleteIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 4,
  },
  taskTitle: {
    color: '#010618',
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
  },
  dueDate: {
    color: '#21283F',
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    fontWeight: '400',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 16,
    height: 40,
  },
  primaryButton: {
    backgroundColor: '#80B3FF',
  },
  secondaryButton: {
    borderColor: 'rgba(128, 179, 255, 1)',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  buttonText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  primaryButtonText: {
    color: '#010618',
  },
  secondaryButtonText: {
    color: '#010618',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8,
    gap: 8,
  },
});

export default EventCard;

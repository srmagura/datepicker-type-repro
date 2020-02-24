import React from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'

const mode: 'date' | 'time' | 'datetime' = 'datetime'
const picker = <DateTimePicker
    isVisible={true}
    mode={mode}
    onConfirm={() => {}}
    onCancel={() => {}}
/>

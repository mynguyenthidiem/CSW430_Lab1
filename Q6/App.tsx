import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView, StyleSheet} from 'react-native';

export default function App() {

  // 1
  // Employee
  // giống kiểu khai báo biến, ban đầu biến rỗng
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [messages, setMessages] = useState("");

  // biến để lưu số
  const [num, setNum] = useState("");
  // biến lưu kết quả, giá trị ban đầu là 0
  const [sum, setSum] = useState(0);

  // 2.
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [min, setMin] = useState("");

  // 3.
  const [positiveNum, setPositiveNum] = useState("");
  // biến là list
  const [listResult, setListResult] = useState<number[]>([]);

  // logic
  // tính sum
  const calcSum = () =>{
    const str = num.toString();
    setSum(parseInt(str[0]) + parseInt(str[str.length-1]));
  };

  // tìm min
  const findMin = () =>{
    setMin(Math.min(parseInt(num1), parseInt(num2), parseInt(num3)).toString());
  };

  const makeHailstone = () => {
    let x = parseInt(positiveNum);
    let result: number[] = [];
    while ( x!=1){
      result.push(x);
      x=(x%2==0)?(x/2):(x*3+1);
    }
    result.push(1);
    setListResult(result);
  };
 return (
    <ScrollView // cuộn chuột 
      contentContainerStyle={styles.container} // áp dụng style cho nội dung bên trong ScrollView
      showsVerticalScrollIndicator={false} // không hiển thị thanh cuộn dọc
    >

      {/* Employee */}
      <View style={styles.card}> {/*tạo 1 card , giống div*/}
        <Text style={styles.title}>Employee</Text>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Occupation"
          value={occupation}
          onChangeText={setOccupation}
          style={styles.input}
        />

        <Button
          title="Submit"
          color="#1976D2"
          onPress={() =>
            setMessages(
              `Name: ${name}\nAge: ${age}\nOccupation: ${occupation}`
            )
          }
        />

        <Text style={styles.result}>{messages}</Text>
      </View>

      {/* Sum */}
      <View style={styles.card}>
        <Text style={styles.title}>Sum of First and Last Digit</Text>

        <TextInput
          placeholder="Enter a number"
          value={num}
          onChangeText={setNum}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button
          title="Calculate Sum"
          color="#1976D2"
          onPress={calcSum}
        />

        <Text style={styles.result}>
          Sum: {sum}
        </Text>
      </View>

      {/* Find Min */}
      <View style={styles.card}>
        <Text style={styles.title}>Find Minimum</Text>

        <TextInput
          placeholder="Enter number 1"
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter number 2"
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Enter number 3"
          value={num3}
          onChangeText={setNum3}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button
          title="Find Min"
          color="#1976D2"
          onPress={findMin}
        />

        <Text style={styles.result}>
          Min: {min}
        </Text>
      </View>

      {/* Hailstone */}
      <View style={styles.card}>
        <Text style={styles.title}>Hailstone Sequence</Text>

        <TextInput
          placeholder="Enter a positive number"
          value={positiveNum}
          onChangeText={setPositiveNum}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button
          title="Generate Sequence"
          color="#1976D2"
          onPress={makeHailstone}
        />

        <Text style={styles.result}>
          Sequence: {listResult.join(" → ")}
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#EEF2F7',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,

    elevation: 5,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D0D7DE',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },

  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    lineHeight: 24,
  },
});
import React, { StrictMode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Reqemler = (props) => {
  const [numb, setNum] = useState(props.reqem)
  return (
    <TouchableOpacity style={styles.button} onPress={props.onCustomPress}>
      <Text style={styles.tittle}>
        {props.reqem}
      </Text >
    </TouchableOpacity>
  )
};
const App = () => {
  const [Result, setResult] = useState("0");
  const [firstnumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3,];

  const setNumber = numbers => {
    if (Result === '0') {
      setResult(numbers)
    } else {
      setResult(Result + numbers)
    }
  };
  const division = () => {
    setFirstNumber(parseInt(Result));
    setOperation("/");
    setResult('');
  };
  const multiplication = () => {
    setFirstNumber(parseInt(Result));
    setOperation("*");
    setResult('');
  };
  const subtraction = () => {
    setFirstNumber(parseInt(Result));
    setOperation("-");
    setResult('');
  };
  const sum = () => {
    setFirstNumber(parseInt(Result));
    setOperation("+");
    setResult('');
  };
  const percentage = () => {
    setFirstNumber(parseInt(Result));
    setOperation("%");
    setResult('');
  };

  const equal = () => {
    let result = firstnumber;
    if (operation === "+") {
      result += parseInt(Result);
    } else if (operation === "-") {
      result -= parseInt(Result);
    } else if (operation === "*") {
      result *= parseInt(Result);
    } else if (operation === "/") {
      result /= parseInt(Result);
    } else if (operation === "%") {
      result %= parseInt(Result);
    }
    setResult(result.toString());
  };
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>
          {Result}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttoncontainer}>

          <TouchableOpacity style={styles.operationbutton} onPress={
            (clear) => {
              let localResult = ' ';
              setResult(localResult)
            }}>
            <Text style={styles.title}>
              C
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationbutton} onPress={
            () => {
              let localResult = ' ';
              setResult(localResult)
            }}>
            <Text style={styles.title}>
              DL
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationbutton} onPress={percentage}
          >
            <Text style={styles.title}>
              %
            </Text>
          </TouchableOpacity>

          {numbers.map((item, index) => {
            return <Reqemler reqem={item} onCustomPress={() => {
              let localResult = ${ Result }+ ${ item };
              setResult(localResult)
            }} />;
          })}

          <TouchableOpacity style={styles.commabutton} onPress={
            () => {
              let localResult = Result + ',';
              setResult(localResult)
            }}>
            <Text style={styles.title}>
              ,
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={
            () => {
              let localResult = Result + '0';
              setResult(localResult)
            }
          }>
            <Text style={styles.tittle}>
              0
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.commabutton} >
            <Text style={styles.title} onPress={
              () => {
                let localResult = Result + '00';
                setResult(localResult)
              }}>
              00
            </Text>
          </TouchableOpacity>

        </View >
        <View style={styles.operationContainer}  >
          <TouchableOpacity style={styles.operationbutton} onPress={sum}
          >
            <Text style={styles.title}>
              +
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationbutton} onPress={subtraction}
          >
            <Text style={styles.title}>
              -
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationbutton} onPress={multiplication}>
          <Text style={styles.title}>
            *
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationbutton} onPress={division}
        >
          <Text style={styles.title}>
            /
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.operationbutton} onPress={equal}
        >
          <Text style={styles.title}>
            =
          </Text>
        </TouchableOpacity>
      </View>
    </View> 
    </View >    
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7E354D',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#F8F8FF',
    borderRadius: 18,
    height: '17%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttoncontainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8
  },
  text: {
    fontSize: 55,
    color: 'white'
  },
  tittle: {
    fontSize: 35,
    color: '#550A35'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    gap: 3
  },
  operationbutton: {
    backgroundColor: '#C08081',
    borderRadius: 18,
    height: 68,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  operationContainer: {
    gap: 5,
  },
  title: {
    fontSize: 30,
    color: '#550A35'
  },
  commabutton: {
    backgroundColor: '#C08081',
    borderRadius: 18,
    height: 65,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});

export default App;


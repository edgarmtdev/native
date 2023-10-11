import { useCallback, useState, useEffect } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { getData } from "../../../services";
import { Character } from "../../../types";
import { styles } from "./styles";

export const RequestsView = () => {
  const [data, setData] = useState<Character[]>();
  const [page, setPage] = useState<number>(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(async () => {
    setPage(page + 1);
    setRefreshing(true);
    setTimeout(function () {
      setRefreshing(false);
    }, 1000);
  }, [page]);

  useEffect(function () {
    const fetchData = async () => {
      const data = await getData(page);
      setData(data.results);
    };

    fetchData();
  }, [page]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Loading..."
          />
        }
      >
        <View style={styles().main}>
          <View style={styles().info}>
            <View style={styles().statusContainer}>
              <TouchableOpacity
                style={styles({ status: "Alive" }).statusCircle}
              />
              <Text>Alive</Text>
            </View>
            <View style={styles().statusContainer}>
              <TouchableOpacity
                style={styles({ status: "Dead" }).statusCircle}
              />
              <Text>Dead</Text>
            </View>
          </View>
          {data?.map(function ({ name, image, species, status, id }) {
            return (
              <View style={styles().cardContainer} key={id}>
                <Image
                  source={{ uri: image }}
                  style={styles().image}
                  alt={name}
                />
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 15 }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {data && name}
                  </Text>
                  <Text>{data && species}</Text>
                  <TouchableOpacity
                    style={styles({ status }).statusCircle}
                  ></TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

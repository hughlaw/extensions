import { useCachedPromise } from "@raycast/utils";
import { XcodeSimulatorApplicationService } from "../../services/xcode-simulator-application.service";
import { List } from "@raycast/api";
import { XcodeSimulatorApplicationListItem } from "./xcode-simulator-application-list-item.component";

/**
 * Xcode Simulator Application List
 */
export function XcodeSimulatorApplicationList(): JSX.Element {
  const xcodeSimulatorApplications = useCachedPromise(XcodeSimulatorApplicationService.xcodeSimulatorApplications);
  return (
    <List isLoading={xcodeSimulatorApplications.isLoading} isShowingDetail={!!xcodeSimulatorApplications.data?.length}>
      {xcodeSimulatorApplications.data?.map((application) => (
        <XcodeSimulatorApplicationListItem key={application.id} application={application} />
      ))}
    </List>
  );
}
